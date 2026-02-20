import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1722 } from "./fragment1722";
import type { FragmentToken1723 } from "./fragment1723";

export const FRAGMENT_1724 = gql(`
  fragment Fragment1724 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult1724 = ResultOf<typeof FRAGMENT_1724>;
type FragmentSelf1724 = NonNullable<FragmentResult1724>;

export type FragmentToken1724 =
  | FragmentSelf1724["__typename"]
  | FragmentSelf1724["typenameHint"] | FragmentToken1722 | FragmentToken1723;
