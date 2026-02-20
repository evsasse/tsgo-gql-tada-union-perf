import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1577 } from "./fragment1577";
import type { FragmentToken1578 } from "./fragment1578";

export const FRAGMENT_1579 = gql(`
  fragment Fragment1579 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult1579 = ResultOf<typeof FRAGMENT_1579>;
type FragmentSelf1579 = NonNullable<FragmentResult1579>;

export type FragmentToken1579 =
  | FragmentSelf1579["__typename"]
  | FragmentSelf1579["typenameHint"] | FragmentToken1577 | FragmentToken1578;
