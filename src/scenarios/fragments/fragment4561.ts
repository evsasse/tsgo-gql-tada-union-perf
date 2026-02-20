import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4559 } from "./fragment4559";
import type { FragmentToken4560 } from "./fragment4560";

export const FRAGMENT_4561 = gql(`
  fragment Fragment4561 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult4561 = ResultOf<typeof FRAGMENT_4561>;
type FragmentSelf4561 = NonNullable<FragmentResult4561>;

export type FragmentToken4561 =
  | FragmentSelf4561["__typename"]
  | FragmentSelf4561["typenameHint"] | FragmentToken4559 | FragmentToken4560;
