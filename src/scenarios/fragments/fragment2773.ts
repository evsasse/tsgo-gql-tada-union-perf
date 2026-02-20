import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2771 } from "./fragment2771";
import type { FragmentToken2772 } from "./fragment2772";

export const FRAGMENT_2773 = gql(`
  fragment Fragment2773 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult2773 = ResultOf<typeof FRAGMENT_2773>;
type FragmentSelf2773 = NonNullable<FragmentResult2773>;

export type FragmentToken2773 =
  | FragmentSelf2773["__typename"]
  | FragmentSelf2773["typenameHint"] | FragmentToken2771 | FragmentToken2772;
