import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4657 } from "./fragment4657";
import type { FragmentToken4658 } from "./fragment4658";

export const FRAGMENT_4659 = gql(`
  fragment Fragment4659 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult4659 = ResultOf<typeof FRAGMENT_4659>;
type FragmentSelf4659 = NonNullable<FragmentResult4659>;

export type FragmentToken4659 =
  | FragmentSelf4659["__typename"]
  | FragmentSelf4659["typenameHint"] | FragmentToken4657 | FragmentToken4658;
