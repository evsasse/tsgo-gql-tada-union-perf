import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken646 } from "./fragment646";
import type { FragmentToken647 } from "./fragment647";

export const FRAGMENT_648 = gql(`
  fragment Fragment648 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult648 = ResultOf<typeof FRAGMENT_648>;
type FragmentSelf648 = NonNullable<FragmentResult648>;

export type FragmentToken648 =
  | FragmentSelf648["__typename"]
  | FragmentSelf648["typenameHint"] | FragmentToken646 | FragmentToken647;
