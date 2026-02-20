import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4400 } from "./fragment4400";
import type { FragmentToken4401 } from "./fragment4401";

export const FRAGMENT_4402 = gql(`
  fragment Fragment4402 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult4402 = ResultOf<typeof FRAGMENT_4402>;
type FragmentSelf4402 = NonNullable<FragmentResult4402>;

export type FragmentToken4402 =
  | FragmentSelf4402["__typename"]
  | FragmentSelf4402["typenameHint"] | FragmentToken4400 | FragmentToken4401;
