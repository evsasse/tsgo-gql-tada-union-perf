import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken892 } from "./fragment892";
import type { FragmentToken893 } from "./fragment893";

export const FRAGMENT_894 = gql(`
  fragment Fragment894 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult894 = ResultOf<typeof FRAGMENT_894>;
type FragmentSelf894 = NonNullable<FragmentResult894>;

export type FragmentToken894 =
  | FragmentSelf894["__typename"]
  | FragmentSelf894["typenameHint"] | FragmentToken892 | FragmentToken893;
