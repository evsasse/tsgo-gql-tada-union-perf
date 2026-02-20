import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2430 } from "./fragment2430";
import type { FragmentToken2431 } from "./fragment2431";

export const FRAGMENT_2432 = gql(`
  fragment Fragment2432 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult2432 = ResultOf<typeof FRAGMENT_2432>;
type FragmentSelf2432 = NonNullable<FragmentResult2432>;

export type FragmentToken2432 =
  | FragmentSelf2432["__typename"]
  | FragmentSelf2432["typenameHint"] | FragmentToken2430 | FragmentToken2431;
