import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4554 } from "./fragment4554";
import type { FragmentToken4555 } from "./fragment4555";

export const FRAGMENT_4556 = gql(`
  fragment Fragment4556 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult4556 = ResultOf<typeof FRAGMENT_4556>;
type FragmentSelf4556 = NonNullable<FragmentResult4556>;

export type FragmentToken4556 =
  | FragmentSelf4556["__typename"]
  | FragmentSelf4556["typenameHint"] | FragmentToken4554 | FragmentToken4555;
