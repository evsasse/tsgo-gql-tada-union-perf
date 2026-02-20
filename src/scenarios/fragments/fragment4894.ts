import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4892 } from "./fragment4892";
import type { FragmentToken4893 } from "./fragment4893";

export const FRAGMENT_4894 = gql(`
  fragment Fragment4894 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult4894 = ResultOf<typeof FRAGMENT_4894>;
type FragmentSelf4894 = NonNullable<FragmentResult4894>;

export type FragmentToken4894 =
  | FragmentSelf4894["__typename"]
  | FragmentSelf4894["typenameHint"] | FragmentToken4892 | FragmentToken4893;
