import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2833 } from "./fragment2833";
import type { FragmentToken2834 } from "./fragment2834";

export const FRAGMENT_2835 = gql(`
  fragment Fragment2835 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult2835 = ResultOf<typeof FRAGMENT_2835>;
type FragmentSelf2835 = NonNullable<FragmentResult2835>;

export type FragmentToken2835 =
  | FragmentSelf2835["__typename"]
  | FragmentSelf2835["typenameHint"] | FragmentToken2833 | FragmentToken2834;
