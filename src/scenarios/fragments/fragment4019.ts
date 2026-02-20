import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4017 } from "./fragment4017";
import type { FragmentToken4018 } from "./fragment4018";

export const FRAGMENT_4019 = gql(`
  fragment Fragment4019 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult4019 = ResultOf<typeof FRAGMENT_4019>;
type FragmentSelf4019 = NonNullable<FragmentResult4019>;

export type FragmentToken4019 =
  | FragmentSelf4019["__typename"]
  | FragmentSelf4019["typenameHint"] | FragmentToken4017 | FragmentToken4018;
