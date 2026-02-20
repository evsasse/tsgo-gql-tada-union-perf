import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken507 } from "./fragment507";
import type { FragmentToken508 } from "./fragment508";

export const FRAGMENT_509 = gql(`
  fragment Fragment509 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult509 = ResultOf<typeof FRAGMENT_509>;
type FragmentSelf509 = NonNullable<FragmentResult509>;

export type FragmentToken509 =
  | FragmentSelf509["__typename"]
  | FragmentSelf509["typenameHint"] | FragmentToken507 | FragmentToken508;
