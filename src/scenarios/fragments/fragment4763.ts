import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4761 } from "./fragment4761";
import type { FragmentToken4762 } from "./fragment4762";

export const FRAGMENT_4763 = gql(`
  fragment Fragment4763 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult4763 = ResultOf<typeof FRAGMENT_4763>;
type FragmentSelf4763 = NonNullable<FragmentResult4763>;

export type FragmentToken4763 =
  | FragmentSelf4763["__typename"]
  | FragmentSelf4763["typenameHint"] | FragmentToken4761 | FragmentToken4762;
