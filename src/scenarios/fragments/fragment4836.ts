import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4834 } from "./fragment4834";
import type { FragmentToken4835 } from "./fragment4835";

export const FRAGMENT_4836 = gql(`
  fragment Fragment4836 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult4836 = ResultOf<typeof FRAGMENT_4836>;
type FragmentSelf4836 = NonNullable<FragmentResult4836>;

export type FragmentToken4836 =
  | FragmentSelf4836["__typename"]
  | FragmentSelf4836["typenameHint"] | FragmentToken4834 | FragmentToken4835;
