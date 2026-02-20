import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken035 } from "./fragment035";
import type { FragmentToken036 } from "./fragment036";

export const FRAGMENT_037 = gql(`
  fragment Fragment037 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult037 = ResultOf<typeof FRAGMENT_037>;
type FragmentSelf037 = NonNullable<FragmentResult037>;

export type FragmentToken037 =
  | FragmentSelf037["__typename"]
  | FragmentSelf037["typenameHint"] | FragmentToken035 | FragmentToken036;
