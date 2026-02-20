import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2150 } from "./fragment2150";
import type { FragmentToken2151 } from "./fragment2151";

export const FRAGMENT_2152 = gql(`
  fragment Fragment2152 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult2152 = ResultOf<typeof FRAGMENT_2152>;
type FragmentSelf2152 = NonNullable<FragmentResult2152>;

export type FragmentToken2152 =
  | FragmentSelf2152["__typename"]
  | FragmentSelf2152["typenameHint"] | FragmentToken2150 | FragmentToken2151;
