import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken534 } from "./fragment534";
import type { FragmentToken535 } from "./fragment535";

export const FRAGMENT_536 = gql(`
  fragment Fragment536 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult536 = ResultOf<typeof FRAGMENT_536>;
type FragmentSelf536 = NonNullable<FragmentResult536>;

export type FragmentToken536 =
  | FragmentSelf536["__typename"]
  | FragmentSelf536["typenameHint"] | FragmentToken534 | FragmentToken535;
