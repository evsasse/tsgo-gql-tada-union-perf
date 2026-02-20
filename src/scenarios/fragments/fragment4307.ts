import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4305 } from "./fragment4305";
import type { FragmentToken4306 } from "./fragment4306";

export const FRAGMENT_4307 = gql(`
  fragment Fragment4307 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult4307 = ResultOf<typeof FRAGMENT_4307>;
type FragmentSelf4307 = NonNullable<FragmentResult4307>;

export type FragmentToken4307 =
  | FragmentSelf4307["__typename"]
  | FragmentSelf4307["typenameHint"] | FragmentToken4305 | FragmentToken4306;
