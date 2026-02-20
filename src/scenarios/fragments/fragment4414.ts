import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4412 } from "./fragment4412";
import type { FragmentToken4413 } from "./fragment4413";

export const FRAGMENT_4414 = gql(`
  fragment Fragment4414 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult4414 = ResultOf<typeof FRAGMENT_4414>;
type FragmentSelf4414 = NonNullable<FragmentResult4414>;

export type FragmentToken4414 =
  | FragmentSelf4414["__typename"]
  | FragmentSelf4414["typenameHint"] | FragmentToken4412 | FragmentToken4413;
