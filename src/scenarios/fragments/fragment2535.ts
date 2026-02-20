import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2533 } from "./fragment2533";
import type { FragmentToken2534 } from "./fragment2534";

export const FRAGMENT_2535 = gql(`
  fragment Fragment2535 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult2535 = ResultOf<typeof FRAGMENT_2535>;
type FragmentSelf2535 = NonNullable<FragmentResult2535>;

export type FragmentToken2535 =
  | FragmentSelf2535["__typename"]
  | FragmentSelf2535["typenameHint"] | FragmentToken2533 | FragmentToken2534;
