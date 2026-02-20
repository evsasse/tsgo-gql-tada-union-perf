import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4585 } from "./fragment4585";
import type { FragmentToken4586 } from "./fragment4586";

export const FRAGMENT_4587 = gql(`
  fragment Fragment4587 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult4587 = ResultOf<typeof FRAGMENT_4587>;
type FragmentSelf4587 = NonNullable<FragmentResult4587>;

export type FragmentToken4587 =
  | FragmentSelf4587["__typename"]
  | FragmentSelf4587["typenameHint"] | FragmentToken4585 | FragmentToken4586;
