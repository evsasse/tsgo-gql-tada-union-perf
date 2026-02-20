import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4082 } from "./fragment4082";
import type { FragmentToken4083 } from "./fragment4083";

export const FRAGMENT_4084 = gql(`
  fragment Fragment4084 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult4084 = ResultOf<typeof FRAGMENT_4084>;
type FragmentSelf4084 = NonNullable<FragmentResult4084>;

export type FragmentToken4084 =
  | FragmentSelf4084["__typename"]
  | FragmentSelf4084["typenameHint"] | FragmentToken4082 | FragmentToken4083;
