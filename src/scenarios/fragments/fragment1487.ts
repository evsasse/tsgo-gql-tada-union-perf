import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1485 } from "./fragment1485";
import type { FragmentToken1486 } from "./fragment1486";

export const FRAGMENT_1487 = gql(`
  fragment Fragment1487 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult1487 = ResultOf<typeof FRAGMENT_1487>;
type FragmentSelf1487 = NonNullable<FragmentResult1487>;

export type FragmentToken1487 =
  | FragmentSelf1487["__typename"]
  | FragmentSelf1487["typenameHint"] | FragmentToken1485 | FragmentToken1486;
