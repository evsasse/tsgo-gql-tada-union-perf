import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4618 } from "./fragment4618";
import type { FragmentToken4619 } from "./fragment4619";

export const FRAGMENT_4620 = gql(`
  fragment Fragment4620 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult4620 = ResultOf<typeof FRAGMENT_4620>;
type FragmentSelf4620 = NonNullable<FragmentResult4620>;

export type FragmentToken4620 =
  | FragmentSelf4620["__typename"]
  | FragmentSelf4620["typenameHint"] | FragmentToken4618 | FragmentToken4619;
