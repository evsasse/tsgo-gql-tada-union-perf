import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken345 } from "./fragment345";
import type { FragmentToken346 } from "./fragment346";

export const FRAGMENT_347 = gql(`
  fragment Fragment347 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult347 = ResultOf<typeof FRAGMENT_347>;
type FragmentSelf347 = NonNullable<FragmentResult347>;

export type FragmentToken347 =
  | FragmentSelf347["__typename"]
  | FragmentSelf347["typenameHint"] | FragmentToken345 | FragmentToken346;
