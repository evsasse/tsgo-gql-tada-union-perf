import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1812 } from "./fragment1812";
import type { FragmentToken1813 } from "./fragment1813";

export const FRAGMENT_1814 = gql(`
  fragment Fragment1814 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult1814 = ResultOf<typeof FRAGMENT_1814>;
type FragmentSelf1814 = NonNullable<FragmentResult1814>;

export type FragmentToken1814 =
  | FragmentSelf1814["__typename"]
  | FragmentSelf1814["typenameHint"] | FragmentToken1812 | FragmentToken1813;
