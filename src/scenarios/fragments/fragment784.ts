import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken782 } from "./fragment782";
import type { FragmentToken783 } from "./fragment783";

export const FRAGMENT_784 = gql(`
  fragment Fragment784 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult784 = ResultOf<typeof FRAGMENT_784>;
type FragmentSelf784 = NonNullable<FragmentResult784>;

export type FragmentToken784 =
  | FragmentSelf784["__typename"]
  | FragmentSelf784["typenameHint"] | FragmentToken782 | FragmentToken783;
