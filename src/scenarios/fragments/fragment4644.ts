import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4642 } from "./fragment4642";
import type { FragmentToken4643 } from "./fragment4643";

export const FRAGMENT_4644 = gql(`
  fragment Fragment4644 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult4644 = ResultOf<typeof FRAGMENT_4644>;
type FragmentSelf4644 = NonNullable<FragmentResult4644>;

export type FragmentToken4644 =
  | FragmentSelf4644["__typename"]
  | FragmentSelf4644["typenameHint"] | FragmentToken4642 | FragmentToken4643;
