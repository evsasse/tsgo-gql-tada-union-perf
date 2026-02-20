import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4018 } from "./fragment4018";
import type { FragmentToken4019 } from "./fragment4019";

export const FRAGMENT_4020 = gql(`
  fragment Fragment4020 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult4020 = ResultOf<typeof FRAGMENT_4020>;
type FragmentSelf4020 = NonNullable<FragmentResult4020>;

export type FragmentToken4020 =
  | FragmentSelf4020["__typename"]
  | FragmentSelf4020["typenameHint"] | FragmentToken4018 | FragmentToken4019;
