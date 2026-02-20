import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1874 } from "./fragment1874";
import type { FragmentToken1875 } from "./fragment1875";

export const FRAGMENT_1876 = gql(`
  fragment Fragment1876 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult1876 = ResultOf<typeof FRAGMENT_1876>;
type FragmentSelf1876 = NonNullable<FragmentResult1876>;

export type FragmentToken1876 =
  | FragmentSelf1876["__typename"]
  | FragmentSelf1876["typenameHint"] | FragmentToken1874 | FragmentToken1875;
