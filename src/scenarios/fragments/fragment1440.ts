import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1438 } from "./fragment1438";
import type { FragmentToken1439 } from "./fragment1439";

export const FRAGMENT_1440 = gql(`
  fragment Fragment1440 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult1440 = ResultOf<typeof FRAGMENT_1440>;
type FragmentSelf1440 = NonNullable<FragmentResult1440>;

export type FragmentToken1440 =
  | FragmentSelf1440["__typename"]
  | FragmentSelf1440["typenameHint"] | FragmentToken1438 | FragmentToken1439;
