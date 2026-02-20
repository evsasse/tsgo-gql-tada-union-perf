import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken781 } from "./fragment781";
import type { FragmentToken782 } from "./fragment782";

export const FRAGMENT_783 = gql(`
  fragment Fragment783 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult783 = ResultOf<typeof FRAGMENT_783>;
type FragmentSelf783 = NonNullable<FragmentResult783>;

export type FragmentToken783 =
  | FragmentSelf783["__typename"]
  | FragmentSelf783["typenameHint"] | FragmentToken781 | FragmentToken782;
