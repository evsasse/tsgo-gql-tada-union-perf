import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken844 } from "./fragment844";
import type { FragmentToken845 } from "./fragment845";

export const FRAGMENT_846 = gql(`
  fragment Fragment846 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult846 = ResultOf<typeof FRAGMENT_846>;
type FragmentSelf846 = NonNullable<FragmentResult846>;

export type FragmentToken846 =
  | FragmentSelf846["__typename"]
  | FragmentSelf846["typenameHint"] | FragmentToken844 | FragmentToken845;
