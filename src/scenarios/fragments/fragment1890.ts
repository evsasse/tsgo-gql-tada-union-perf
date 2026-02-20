import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1888 } from "./fragment1888";
import type { FragmentToken1889 } from "./fragment1889";

export const FRAGMENT_1890 = gql(`
  fragment Fragment1890 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult1890 = ResultOf<typeof FRAGMENT_1890>;
type FragmentSelf1890 = NonNullable<FragmentResult1890>;

export type FragmentToken1890 =
  | FragmentSelf1890["__typename"]
  | FragmentSelf1890["typenameHint"] | FragmentToken1888 | FragmentToken1889;
