import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2434 } from "./fragment2434";
import type { FragmentToken2435 } from "./fragment2435";

export const FRAGMENT_2436 = gql(`
  fragment Fragment2436 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult2436 = ResultOf<typeof FRAGMENT_2436>;
type FragmentSelf2436 = NonNullable<FragmentResult2436>;

export type FragmentToken2436 =
  | FragmentSelf2436["__typename"]
  | FragmentSelf2436["typenameHint"] | FragmentToken2434 | FragmentToken2435;
