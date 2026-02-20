import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4857 } from "./fragment4857";
import type { FragmentToken4858 } from "./fragment4858";

export const FRAGMENT_4859 = gql(`
  fragment Fragment4859 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult4859 = ResultOf<typeof FRAGMENT_4859>;
type FragmentSelf4859 = NonNullable<FragmentResult4859>;

export type FragmentToken4859 =
  | FragmentSelf4859["__typename"]
  | FragmentSelf4859["typenameHint"] | FragmentToken4857 | FragmentToken4858;
