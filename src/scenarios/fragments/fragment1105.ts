import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1103 } from "./fragment1103";
import type { FragmentToken1104 } from "./fragment1104";

export const FRAGMENT_1105 = gql(`
  fragment Fragment1105 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult1105 = ResultOf<typeof FRAGMENT_1105>;
type FragmentSelf1105 = NonNullable<FragmentResult1105>;

export type FragmentToken1105 =
  | FragmentSelf1105["__typename"]
  | FragmentSelf1105["typenameHint"] | FragmentToken1103 | FragmentToken1104;
