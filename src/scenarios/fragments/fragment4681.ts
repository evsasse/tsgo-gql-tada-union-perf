import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4679 } from "./fragment4679";
import type { FragmentToken4680 } from "./fragment4680";

export const FRAGMENT_4681 = gql(`
  fragment Fragment4681 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult4681 = ResultOf<typeof FRAGMENT_4681>;
type FragmentSelf4681 = NonNullable<FragmentResult4681>;

export type FragmentToken4681 =
  | FragmentSelf4681["__typename"]
  | FragmentSelf4681["typenameHint"] | FragmentToken4679 | FragmentToken4680;
