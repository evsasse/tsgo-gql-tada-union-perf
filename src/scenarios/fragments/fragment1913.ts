import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1911 } from "./fragment1911";
import type { FragmentToken1912 } from "./fragment1912";

export const FRAGMENT_1913 = gql(`
  fragment Fragment1913 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult1913 = ResultOf<typeof FRAGMENT_1913>;
type FragmentSelf1913 = NonNullable<FragmentResult1913>;

export type FragmentToken1913 =
  | FragmentSelf1913["__typename"]
  | FragmentSelf1913["typenameHint"] | FragmentToken1911 | FragmentToken1912;
