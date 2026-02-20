import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1442 } from "./fragment1442";
import type { FragmentToken1443 } from "./fragment1443";

export const FRAGMENT_1444 = gql(`
  fragment Fragment1444 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult1444 = ResultOf<typeof FRAGMENT_1444>;
type FragmentSelf1444 = NonNullable<FragmentResult1444>;

export type FragmentToken1444 =
  | FragmentSelf1444["__typename"]
  | FragmentSelf1444["typenameHint"] | FragmentToken1442 | FragmentToken1443;
