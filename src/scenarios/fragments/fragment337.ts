import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken335 } from "./fragment335";
import type { FragmentToken336 } from "./fragment336";

export const FRAGMENT_337 = gql(`
  fragment Fragment337 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult337 = ResultOf<typeof FRAGMENT_337>;
type FragmentSelf337 = NonNullable<FragmentResult337>;

export type FragmentToken337 =
  | FragmentSelf337["__typename"]
  | FragmentSelf337["typenameHint"] | FragmentToken335 | FragmentToken336;
