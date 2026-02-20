import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4786 } from "./fragment4786";
import type { FragmentToken4787 } from "./fragment4787";

export const FRAGMENT_4788 = gql(`
  fragment Fragment4788 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult4788 = ResultOf<typeof FRAGMENT_4788>;
type FragmentSelf4788 = NonNullable<FragmentResult4788>;

export type FragmentToken4788 =
  | FragmentSelf4788["__typename"]
  | FragmentSelf4788["typenameHint"] | FragmentToken4786 | FragmentToken4787;
