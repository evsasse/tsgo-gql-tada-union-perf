import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1077 } from "./fragment1077";
import type { FragmentToken1078 } from "./fragment1078";

export const FRAGMENT_1079 = gql(`
  fragment Fragment1079 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult1079 = ResultOf<typeof FRAGMENT_1079>;
type FragmentSelf1079 = NonNullable<FragmentResult1079>;

export type FragmentToken1079 =
  | FragmentSelf1079["__typename"]
  | FragmentSelf1079["typenameHint"] | FragmentToken1077 | FragmentToken1078;
