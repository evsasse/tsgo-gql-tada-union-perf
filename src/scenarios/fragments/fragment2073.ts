import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2071 } from "./fragment2071";
import type { FragmentToken2072 } from "./fragment2072";

export const FRAGMENT_2073 = gql(`
  fragment Fragment2073 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult2073 = ResultOf<typeof FRAGMENT_2073>;
type FragmentSelf2073 = NonNullable<FragmentResult2073>;

export type FragmentToken2073 =
  | FragmentSelf2073["__typename"]
  | FragmentSelf2073["typenameHint"] | FragmentToken2071 | FragmentToken2072;
