import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1912 } from "./fragment1912";
import type { FragmentToken1913 } from "./fragment1913";

export const FRAGMENT_1914 = gql(`
  fragment Fragment1914 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult1914 = ResultOf<typeof FRAGMENT_1914>;
type FragmentSelf1914 = NonNullable<FragmentResult1914>;

export type FragmentToken1914 =
  | FragmentSelf1914["__typename"]
  | FragmentSelf1914["typenameHint"] | FragmentToken1912 | FragmentToken1913;
