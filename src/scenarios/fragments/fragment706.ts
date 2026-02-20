import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken704 } from "./fragment704";
import type { FragmentToken705 } from "./fragment705";

export const FRAGMENT_706 = gql(`
  fragment Fragment706 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult706 = ResultOf<typeof FRAGMENT_706>;
type FragmentSelf706 = NonNullable<FragmentResult706>;

export type FragmentToken706 =
  | FragmentSelf706["__typename"]
  | FragmentSelf706["typenameHint"] | FragmentToken704 | FragmentToken705;
