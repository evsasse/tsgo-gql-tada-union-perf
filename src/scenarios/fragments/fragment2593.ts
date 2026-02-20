import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2591 } from "./fragment2591";
import type { FragmentToken2592 } from "./fragment2592";

export const FRAGMENT_2593 = gql(`
  fragment Fragment2593 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult2593 = ResultOf<typeof FRAGMENT_2593>;
type FragmentSelf2593 = NonNullable<FragmentResult2593>;

export type FragmentToken2593 =
  | FragmentSelf2593["__typename"]
  | FragmentSelf2593["typenameHint"] | FragmentToken2591 | FragmentToken2592;
