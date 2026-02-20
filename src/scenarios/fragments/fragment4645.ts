import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4643 } from "./fragment4643";
import type { FragmentToken4644 } from "./fragment4644";

export const FRAGMENT_4645 = gql(`
  fragment Fragment4645 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult4645 = ResultOf<typeof FRAGMENT_4645>;
type FragmentSelf4645 = NonNullable<FragmentResult4645>;

export type FragmentToken4645 =
  | FragmentSelf4645["__typename"]
  | FragmentSelf4645["typenameHint"] | FragmentToken4643 | FragmentToken4644;
