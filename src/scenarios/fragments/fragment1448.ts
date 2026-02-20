import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1446 } from "./fragment1446";
import type { FragmentToken1447 } from "./fragment1447";

export const FRAGMENT_1448 = gql(`
  fragment Fragment1448 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult1448 = ResultOf<typeof FRAGMENT_1448>;
type FragmentSelf1448 = NonNullable<FragmentResult1448>;

export type FragmentToken1448 =
  | FragmentSelf1448["__typename"]
  | FragmentSelf1448["typenameHint"] | FragmentToken1446 | FragmentToken1447;
