import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1306 } from "./fragment1306";
import type { FragmentToken1307 } from "./fragment1307";

export const FRAGMENT_1308 = gql(`
  fragment Fragment1308 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult1308 = ResultOf<typeof FRAGMENT_1308>;
type FragmentSelf1308 = NonNullable<FragmentResult1308>;

export type FragmentToken1308 =
  | FragmentSelf1308["__typename"]
  | FragmentSelf1308["typenameHint"] | FragmentToken1306 | FragmentToken1307;
