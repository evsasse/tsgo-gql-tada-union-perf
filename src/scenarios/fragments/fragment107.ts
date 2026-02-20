import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken105 } from "./fragment105";
import type { FragmentToken106 } from "./fragment106";

export const FRAGMENT_107 = gql(`
  fragment Fragment107 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult107 = ResultOf<typeof FRAGMENT_107>;
type FragmentSelf107 = NonNullable<FragmentResult107>;

export type FragmentToken107 =
  | FragmentSelf107["__typename"]
  | FragmentSelf107["typenameHint"] | FragmentToken105 | FragmentToken106;
