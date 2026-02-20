import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3018 } from "./fragment3018";
import type { FragmentToken3019 } from "./fragment3019";

export const FRAGMENT_3020 = gql(`
  fragment Fragment3020 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult3020 = ResultOf<typeof FRAGMENT_3020>;
type FragmentSelf3020 = NonNullable<FragmentResult3020>;

export type FragmentToken3020 =
  | FragmentSelf3020["__typename"]
  | FragmentSelf3020["typenameHint"] | FragmentToken3018 | FragmentToken3019;
